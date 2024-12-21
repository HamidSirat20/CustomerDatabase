using AutoMapper;
using Domain.src.Common;
using Domain.src.Dtos;
using Domain.src.Entities;
using Domain.src.RepoInterfaces;
using Microsoft.EntityFrameworkCore;
using WebApi.src.DataContext;

namespace WebApi.src.Repos;


public class CustomerRepo : ICustomerRepo
{
    private readonly CustomerDbContext _context;
    private readonly DbSet<Customer> _dbSet;
    private readonly IMapper _autoMapper;

    public CustomerRepo(CustomerDbContext context, IMapper mapper)
    {
        _context = context;
        _autoMapper = mapper;
        _dbSet = context.customers;
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

    public async Task<IEnumerable<CustomerReadDto>> GetAllCustomersAsync(QueryParameters queryParameters)
    {
        var query = _dbSet.Include(c => c.Address).AsQueryable();

        if (!string.IsNullOrWhiteSpace(queryParameters.Search))
        {
            string searchTerm = queryParameters.Search.ToLower();
            query = query.Where(c =>
                c.FirstName.ToLower().Contains(searchTerm) ||
                c.LastName.ToLower().Contains(searchTerm) ||
                c.Email.ToLower().Contains(searchTerm));
        }

        query = query
            .Skip(queryParameters.Offset)
            .Take(queryParameters.Limit);

        var result = await query
            .Select(c => new CustomerReadDto
            {
                Id = c.Id,
                FirstName = c.FirstName,
                LastName = c.LastName,
                Email = c.Email,
                MobileNumber = c.MobileNumber,
                Address = new AddressReadDto
                {
                    Street = c.Address.Street,
                    City = c.Address.City,
                    State = c.Address.State,
                    Country = c.Address.Country,
                    ZipCode = c.Address.ZipCode
                }
            })
            .ToListAsync();

        return result;

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
        _context.Entry(customer).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }
}