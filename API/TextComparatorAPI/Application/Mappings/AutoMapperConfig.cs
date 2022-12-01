using Application.Dtos.OutputFilesDtos;
using Application.Dtos.UserDtos;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Mappings
{
    public static class AutoMapperConfig
    {
        public static IMapper Initialize()
            => new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<OutputFile, OutputFileDto>().ConstructUsing(f => new OutputFileDto(f.UserId, f.Name, f.Path, f.Size, f.LastModifiedAt.ToString()));
                cfg.CreateMap<RegisterDto, SignedInUser>();
                cfg.CreateMap<SignedInUser, UserDto>();
            }).CreateMapper();
    }
}
