using Application.Interfaces;
using Application.Mappings;
using Application.Services;
using Domain.Interfaces;
using Infrastructure.Data;
using Infrastructure.Models;
using Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using WebApi.Middlewares;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IComparatorService, ComparatorService>();
builder.Services.AddScoped<IComparator, ByCharComparator>();

builder.Services.AddScoped<IOutputFilesRepository, MSSMOutputFilesRepository>();
builder.Services.AddScoped<IOutputFilesService, OutputFilesService>();

builder.Services.AddScoped<IUsersRepository, MSSMUserRepository>();
builder.Services.AddScoped<IUsersService, UsersService>();

builder.Services.AddSingleton(AutoMapperConfig.Initialize());
builder.Services.AddTransient<ExceptionHandlingMiddleware>();

builder.Services.AddDbContext<TextComparatorContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("TextComparatorCS")));

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles(); // For the wwwroot folder
app.UseMiddleware<ExceptionHandlingMiddleware>();

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors(builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
});

app.UseAuthorization();

app.MapControllers();

app.Run();
