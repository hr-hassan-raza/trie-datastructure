namespace WebApi.Controllers;

using Microsoft.AspNetCore.Mvc;
using WebApi.Services.Complaints;
using WebApi.Models.Complaints;
using WebApi.Models;

[ApiController]
[Route("[controller]")]
public class ComplaintController : ControllerBase
{
    private readonly IComplaintService _complaintService;

    public ComplaintController(
        IComplaintService complaintService)
    {
        _complaintService = complaintService;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var complaints = _complaintService.GetAll();
        return Ok(complaints);
    }

    [HttpPut("{id:int}")]
    public IActionResult Update(int id, [FromBody] UpdateRequest model)
    {
        _complaintService.Update(id, model);
        return Ok(new { message = "Complaint updated" });
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var complaint = _complaintService.GetById(id);
        return Ok(complaint);
    }

    [HttpPost]
    public IActionResult Create(CreateComplaint model)
    {
        _complaintService.Create(model);
        return Ok(new { message = "Complaint created" });
    }
}