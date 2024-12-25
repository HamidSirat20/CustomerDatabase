using Domain.src.Common;
using Domain.src.Entities;
using Domain.src.Dtos;

namespace Business.src.Interfaces;

public interface ICustomerService
{
    Task<IEnumerable<CustomerReadDto>> GetAllCustomers(QueryParameters queryParameters);
    Task<CustomerReadDto> GetCustomerById(int id);
    Task CreateCustomer(CustomerCreateDto customer);
    Task UpdateCustomer(CustomerUpdateDto customer);
    Task DeleteCustomer(int id);
}
