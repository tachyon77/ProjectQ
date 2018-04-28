using System;
using Newtonsoft.Json;

namespace Experiments.Serialization
{
    class Program
    {
        static void Main(string[] args)
        {
            new TestInterfaceSerialization().Do();
        }
    }

    public interface IPublic
    {
        string name { get; set; }
        [JsonIgnore]
        string Password { get; set; }
    };

    public interface IPrivate : IPublic
    {
        new string Password { get; set; }
    };

    public class TestClass : IPublic, IPrivate
    {
        string IPublic.name { get; set; }
        string IPublic.Password { get; set; }
        string IPrivate.Password { get; set; }
    }


    public class TestInterfaceSerialization
    {
        public void Do()
        {
            IPublic i = new TestClass();

            Console.Write(JsonConvert.SerializeObject((TestInterface)i));
            
        }
    }
}
