using AutoMapper;
using Domain.src.Dtos;
using Domain.src.Entities;

namespace WebApi.src.Common;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<CustomerUpdateDto, Customer>()
            .ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Address));
        CreateMap<AddressUpdateDto, Address>();

        CreateMap<CustomerReadDto, Customer>();
        CreateMap<Customer, CustomerReadDto>();

        // CreateMap<CustomerUpdateDto, Customer>();
        CreateMap<Customer, CustomerUpdateDto>();

        CreateMap<CustomerCreateDto, Customer>();
        CreateMap<Customer, CustomerCreateDto>();

        CreateMap<AddressReadDto, Address>();
        CreateMap<Address, AddressReadDto>();

        CreateMap<AddressUpdateDto, Address>();
        CreateMap<Address, AddressUpdateDto>();

        CreateMap<AddressCreateDto, Address>();
        CreateMap<Address, AddressCreateDto>();
    }

}
