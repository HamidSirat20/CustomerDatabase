using Domain.src.Dtos;
using Domain.src.RepoInterfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MiniValidation;
using WebApi.src.Common;
using WebApi.src.DataContext;
using WebApi.src.Repos;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAutoMapper(typeof(AutoMapperProfile));

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

builder.Services.AddAutoMapper(typeof(Program));
// Register DbContext
builder.Services.AddDbContext<CustomerDbContext>(options =>
    options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));
// Register services

builder.Services.AddScoped<ICustomerRepo, CustomerRepo>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(p => p.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod());

app.UseHttpsRedirection();


app.MapGet("/customers", async (ICustomerRepo repo) =>
    {

        return await repo.GetAllCustomersAsync();

    }).Produces<CustomerReadDto[]>(StatusCodes.Status200OK);

app.MapGet("/customers/{Id:int}", async (int Id, ICustomerRepo repo) =>
      {
          var customer = await repo.GetCustomerByIdAsync(Id);
          if (customer == null)
          {
              return Results.Problem($"Customer with Id {Id} not found!", statusCode: 404);
          }
          return Results.Ok(customer);
      }).ProducesProblem(404).Produces<CustomerReadDto>(StatusCodes.Status200OK).ProducesValidationProblem();

app.MapPost("/customers", async ([FromBody] CustomerCreateDto dto, ICustomerRepo repo) =>
{
    if (!MiniValidator.TryValidate(dto, out var errors))
    {
        return Results.ValidationProblem(errors);
    }
    var customer = repo.AddCustomerAsync(dto);
    return Results.Created($"customers/{customer.Id}", customer);
}).ProducesProblem(404).Produces<CustomerCreateDto>(StatusCodes.Status200OK);

app.MapPut("/customers/{Id:int}", async ([FromBody] CustomerUpdateDto dto, int Id, ICustomerRepo repo) =>
{
    if (!MiniValidator.TryValidate(dto, out var errors))
    {
        return Results.ValidationProblem(errors);
    }
    if (await repo.GetCustomerByIdAsync(Id) == null)
    {
        return Results.Problem($"Customer with {Id} not found!", statusCode: 404);
    }
    var updateCustomer = repo.UpdateCustomerAsync(dto, Id);
    return Results.Ok(updateCustomer);

}).ProducesProblem(404).Produces<CustomerUpdateDto>(StatusCodes.Status200OK).ProducesValidationProblem();

app.MapDelete("/customers/{Id:int}", async (int id, ICustomerRepo repo) =>
{
    if (await repo.GetCustomerByIdAsync(id) == null)
    {
        return Results.Problem($"Customer with {id} not found!", statusCode: 404);
    }
    await repo.DeleteCustomerAsync(id);
    return Results.Ok();
}).ProducesProblem(404).Produces<CustomerReadDto>(StatusCodes.Status200OK);

app.Run();

