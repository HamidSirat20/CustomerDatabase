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

    public Task AddCustomerAsync(Customer customer)
    {
        throw new NotImplementedException();
    }

    public Task DeleteCustomerAsync(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<CustomerDto>> GetAllCustomersAsync(QueryParameters queryParameters)
    {
        return await _context.customers.Select(c => new CustomerDto(c.Id, c.FirstName, c.LastName, c.Email, c.Image, c.Address)
            ).ToListAsync();
    }

    public async Task<ReadCustomerDto> GetCustomerByIdAsync(int id)
    {
        var c = await _context.customers.Include(c => c.Address)
        .SingleOrDefaultAsync(c => c.Id == id);
        if (c != null)
        {
            return new ReadCustomerDto(c.Id, c.FirstName, c.LastName, c.Email, c.MobileNumber, c.DateOfBirth, c.Image, c.Address);

        }
        else
        {
            return null;
        }

    }

    public Task UpdateCustomerAsync(Customer customer)
    {
        throw new NotImplementedException();
    }

}