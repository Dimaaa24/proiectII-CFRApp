namespace ProjectII
{
    public class Train
    {
        public int Id {  get; set; }
        public string Name { get; set; } = string.Empty;
        public int Number {  get; set; } 

        public ICollection<Routes> Routes { get; set; }
    }
}
