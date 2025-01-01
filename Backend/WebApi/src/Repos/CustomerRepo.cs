using AutoMapper;
using Domain.src.Dtos;
using Domain.src.Entities;
using Domain.src.RepoInterfaces;
using Microsoft.EntityFrameworkCore;
using WebApi.src.DataContext;

namespace WebApi.src.Repos;


public class CustomerRepo : ICustomerRepo
{
    private readonly CustomerDbContext _context;
    private readonly IMapper _autoMapper;

    public CustomerRepo(CustomerDbContext context, IMapper mapper)
    {
        _context = context;
        _autoMapper = mapper;
    }

    public async Task AddCustomerAsync(CustomerCreateDto createDto)
    {
        var customer = _autoMapper.Map<Customer>(createDto);
        await _context.AddAsync(customer);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteCustomerAsync(int id)
    {
        var customer = await _context.customers.FindAsync(id);
        if (customer is null)
        {
            throw new ArgumentNullException($"customer with {id} not found!");
        }
        _context.customers.Remove(customer);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<CustomerReadDto>> GetAllCustomersAsync()
    {
        var customers = await _context.customers.Include(c => c.Address).ToListAsync();
        return _autoMapper.Map<IEnumerable<CustomerReadDto>>(customers);
    }

    public async Task<CustomerReadDto> GetCustomerByIdAsync(int id)
    {
        var customer = await _context.customers.Include(c => c.Address)
        .SingleOrDefaultAsync(c => c.Id == id);
        if (customer is null)
        {
            throw new ArgumentNullException($"Customer with {id} not found!");
        }
        return _autoMapper.Map<CustomerReadDto>(customer);
    }

    public async Task UpdateCustomerAsync(CustomerUpdateDto updateDto, int id)
    {
        var customer = await _context.customers
        .Include(c => c.Address)
        .FirstOrDefaultAsync(c => c.Id == id);
        if (customer is null)
        {
            throw new ArgumentException($"Customer with ID {id} not found!");
        }

        _autoMapper.Map(updateDto, customer);

        System.Console.WriteLine("Customer address updated: " + customer.Address.City);

        _context.Entry(customer).State = EntityState.Modified;

        _context.Entry(customer.Address).State = EntityState.Modified;

        await _context.SaveChangesAsync();


    }


}