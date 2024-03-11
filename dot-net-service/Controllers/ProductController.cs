namespace WebApi.Controllers;

using Microsoft.AspNetCore.Mvc;
using WebApi.Services.Products;
using WebApi.Entities;

[ApiController]
[Route("[controller]")]
public class ProductsController : ControllerBase
{
    private IProductService _productService;

    public ProductsController(
        IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var products = _productService.GetAll();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var product = _productService.GetById(id);
        return Ok(product);
    }

    [HttpPost]
    public IActionResult Create(Product model)
    {
        _productService.Create(model);
        return Ok(new { message = "Product created" });
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _productService.Delete(id);
        return Ok(new { message = "User deleted" });
    }
}