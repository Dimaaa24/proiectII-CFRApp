using System.ComponentModel.DataAnnotations;

namespace ProiectII.BusinessModels.Models
{
    public class Tickets
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int SeatNumber { get; set; }
        public string Type { get; set; }
    }
}
