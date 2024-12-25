using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.src.Dtos;

namespace Domain.src.RepoInterfaces;

public interface IAddressRepo
{
    Task<IEnumerable<AddressReadDto>> GetAllCustomersAsync();
    Task<AddressReadDto> GetCustomerByIdAsync(int id);
    Task AddCustomerAsync(AddressCreateDto createDto);
    Task UpdateCustomerAsync(AddressUpdateDto updateDto, int id);
    Task DeleteCustomerAsync(int id);
}
