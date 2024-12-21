using AutoMapper;
using Domain.src.Dtos;
using Domain.src.Entities;

namespace WebApi.src.Common;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<CustomerReadDto, Customer>();
        CreateMap<Customer, CustomerReadDto>();

        CreateMap<CustomerUpdateDto, Customer>();
        CreateMap<Customer, CustomerUpdateDto>();

        CreateMap<CustomerCreateDto, Customer>();
        CreateMap<Customer, CustomerCreateDto>();
    }

}
