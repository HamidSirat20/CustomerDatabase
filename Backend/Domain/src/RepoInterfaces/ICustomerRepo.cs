using Domain.src.Entities;
using Domain.src.Common;
using Domain.src.Dtos;


namespace Domain.src.RepoInterfaces;

public interface ICustomerRepo
{
    Task<IEnumerable<CustomerReadDto>> GetAllCustomersAsync();
    Task<CustomerReadDto> GetCustomerByIdAsync(int id);
    Task AddCustomerAsync(CustomerCreateDto createDto);
    Task UpdateCustomerAsync(CustomerUpdateDto updateDto, int id);
    Task DeleteCustomerAsync(int id);
}

