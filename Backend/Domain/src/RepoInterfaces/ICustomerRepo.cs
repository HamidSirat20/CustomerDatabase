using Domain.src.Entities;
using Domain.src.Common;
using Domain.src.Dtos;

namespace Domain.src.RepoInterfaces;

public interface ICustomerRepo
{
    Task<IEnumerable<CustomerDto>> GetAllCustomersAsync(QueryParameters queryParameters);
    Task<ReadCustomerDto> GetCustomerByIdAsync(int id);
    Task AddCustomerAsync(Customer customer);
    Task UpdateCustomerAsync(Customer customer);
    Task DeleteCustomerAsync(int id);
}

