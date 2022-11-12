using System;
using System.Runtime.Serialization;

namespace DemoWebApi.DemoData
{
	[DataContract(Namespace = Constants.DataNamespace)]
	public class DateOnlyContainer
	{
		[DataMember]
		public string Name { get; set; }

		[DataMember]
		public DateOnly RegisterDate { get; set; }
	}
}
