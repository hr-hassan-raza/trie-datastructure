namespace WebApi.Services.Products;

using Microsoft.EntityFrameworkCore;
using WebApi.Entities;
using WebApi.Helpers;

public interface IProductService
{
    IEnumerable<Product> GetAll();
    Product GetById(int id);
    void Create(Product model);
    void Delete(int id);
    Product GetProductByName(string name);
}

public class ProductService(
    DataContext context) : IProductService
{
    private readonly DataContext _context = context;

    public IEnumerable<Product> GetAll()
    {
        return _context.Products;
    }

    public Product GetById(int id)
    {
        return GetProduct(id);
    }

    public void Create(Product model)
    {
        var product = model;
        _context.Products.Add(product);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var product = GetProduct(id);
        _context.Products.Remove(product);
        _context.SaveChanges();
    }

    // helper methods

    private Product GetProduct(int id)
    {
        var product = _context.Products.Find(id) ?? throw new KeyNotFoundException("Product not found");
        return product;
    }

    public Product GetProductByName(string name)
    {
        var product = _context.Products.Find(name) ?? throw new KeyNotFoundException("Product not found");
        return product;
    }
}