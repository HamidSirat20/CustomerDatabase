using Business.src.Interfaces;
using Domain.src.Common;
using Domain.src.Entities;
using Domain.src.RepoInterfaces;
using Domain.src.Dtos;

namespace Business.src.Implementations;

public class CustomerService : ICustomerService
{
    private readonly ICustomerRepo _customerRepo;

    public CustomerService(ICustomerRepo customerRepo)
    {
        _customerRepo = customerRepo;
    }

    public Task CreateCustomer(Customer customer)
    {
        throw new NotImplementedException();
    }

    public Task DeleteCustomer(int id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<CustomerDto>> GetAllCustomers(QueryParameters queryParameters)
    {
        throw new NotImplementedException();
    }

    public Task<ReadCustomerDto> GetCustomerById(int id)
    {
        throw new NotImplementedException();
    }

    public Task UpdateCustomer(Customer customer)
    {
        throw new NotImplementedException();
    }
}
