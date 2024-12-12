using System.Runtime.InteropServices;
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
        return await _context.customers.Select(c => new CustomerDto(c.Id,c.FirstName,c.LastName,c.Email,c.Address)
            ).ToListAsync();
    }

    public Task<CustomerDto> GetCustomerByIdAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task UpdateCustomerAsync(Customer customer)
    {
        throw new NotImplementedException();
    }
}