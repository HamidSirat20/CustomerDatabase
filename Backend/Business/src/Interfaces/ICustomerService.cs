using Domain.src.Common;
using Domain.src.Entities;
using Domain.src.Dtos;

namespace Business.src.Interfaces;

public interface ICustomerService
{
    Task<IEnumerable<CustomerDto>> GetAllCustomers(QueryParameters queryParameters);
    Task<ReadCustomerDto> GetCustomerById(int id);
    Task CreateCustomer(Customer customer);
    Task UpdateCustomer(Customer customer);
    Task DeleteCustomer(int id);
}
