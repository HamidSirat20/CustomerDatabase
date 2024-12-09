using Business.src.Interfaces;
using Domain.src.Entities;
using Domain.src.RepoInterfaces;

namespace Business.src.Implementations;

public class CustomerService : ICustomerService
{
    private readonly ICustomerRepo _customerRepo;

    public CustomerService(ICustomerRepo customerRepo)
    {
        _customerRepo = customerRepo;
    }
    public void CreateCustomer(Customer customer)
    {
        if(string.IsNullOrEmpty(customer.FirstName)) throw new ArgumentNullException("FirstName is required!");
        _customerRepo.AddCustomer(customer);
    }

    public void DeleteCustomer(int id)
    {
        _customerRepo.DeleteCustomer(id);
    }

    public IEnumerable<Customer> GetAllCustomers()
    {
        return _customerRepo.GetAllCustomers();
    }

    public Customer GetCustomerById(int id)
    {
        return _customerRepo.GetCustomerById(id);
    }

    public void UpdateCustomer(Customer customer)
    {
        var customerId = customer.Id;
        var foundCustomer = _customerRepo.GetCustomerById(customerId);
        if(foundCustomer != null)
        {
            _customerRepo.UpdateCustomer(customer);
        }
        else
        {
            throw new ArgumentNullException($"Customer with {customer.Id} id not found!");
        }
    }
}
