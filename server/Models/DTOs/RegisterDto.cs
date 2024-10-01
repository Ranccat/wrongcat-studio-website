using System.ComponentModel.DataAnnotations;

public class RegisterDto
{
    [Required]
    [StringLength(30)]
    public required string UserId { get; set; }

    [Required]
    [EmailAddress]
    public required string Email { get; set; }

    [Required]
    [MinLength(4)]
    public required string Password { get; set; }

    [Required]
    [MinLength(6)]
    public required string Nickname { get; set; }
}
