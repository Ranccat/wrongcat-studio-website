using System.ComponentModel.DataAnnotations;

public class LoginDto
{
    [Required]
    [StringLength(30)]
    public required string UserId { get; set; }

    [Required]
    [MinLength(4)]
    public required string Password { get; set; }
}
