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

    public CustomerRepo(CustomerDbContext context)
    {
        _context = context;
    }

    public async Task AddCustomerAsync(ReadCustomerDto readCustomerDto)
    {
        var customer = new Customer();
        DtoToEntity(customer, readCustomerDto);
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

    public async Task<IEnumerable<CustomerDto>> GetAllCustomersAsync(QueryParameters queryParameters)
    {
        return await _context.customers.Select(c => new CustomerDto(c.Id, c.FirstName, c.LastName, c.Email, c.Image, c.Address)
            ).ToListAsync();
    }

    public async Task<ReadCustomerDto> GetCustomerByIdAsync(int id)
    {
        var customer = await _context.customers.Include(c => c.Address)
        .SingleOrDefaultAsync(c => c.Id == id);
        if (customer is null)
        {
            throw new ArgumentNullException($"Customer with {id} not found!");
        }
        return EntityToReadCustomerDto(customer);
    }

    public async Task UpdateCustomerAsync(ReadCustomerDto readCustomerDto)
    {
        var customer = await _context.customers.FindAsync(readCustomerDto.Id);
        if (customer is null)
        {
            throw new ArgumentNullException($"Customer with {readCustomerDto.Id} not found!");

        }
        DtoToEntity(customer, readCustomerDto);
        _context.Entry(customer).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    private static void DtoToEntity(Customer customer, ReadCustomerDto dto)
    {
        customer.FirstName = dto.FirstName;
        customer.LastName = dto.LastName;
        customer.Email = dto.Email;
        customer.MobileNumber = dto.MobileNumber;
        customer.DateOfBirth = dto.DateOfBirth;
        customer.Image = dto.Image;

        if (dto.Address != null)
        {
            if (customer.Address == null)
            {
                customer.Address = new Address();
            }
            customer.Address.Id = dto.Address.Id;
            customer.Address.Street = dto.Address.Street;
            customer.Address.City = dto.Address.City;
            customer.Address.State = dto.Address.State;
            customer.Address.ZipCode = dto.Address.ZipCode;
            customer.Address.Country = dto.Address.Country;
            customer.AddressId = dto.Address.Id;
        }
    }

    private static ReadCustomerDto EntityToReadCustomerDto(Customer c)
    {
        return new ReadCustomerDto(c.Id, c.FirstName, c.LastName, c.Email, c.MobileNumber, c.DateOfBirth, c.Image, c.Address);
    }


}