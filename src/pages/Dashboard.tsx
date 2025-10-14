import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  MdOutlineGroup,
  MdOutlineInbox,
  MdOutlinePeople,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import { Header } from "../components/Header";
import { StatCard } from "../components/StatCard";
import { useRequest } from "../hooks/useRequest";
import { getCustomersRequest } from "../services/customers";
import { getEmployeesRequest } from "../services/employees";

export default function Dashboard() {
  const options = {
    chart: {
      id: "basic-area",
    },
    xaxis: {
      categories: [
        "0K",
        "5K",
        "10K",
        "15K",
        "20K",
        "25K",
        "30K",
        "35K",
        "40K",
        "45K",
        "50K",
        "55K",
        "60K",
      ],
      labels: { show: true },
    },
    yaxis: {
      labels: { show: true },
    },
  };
  const series = [
    {
      name: "Sales",
      data: [
        465415, 465, 89498, 165165, 454646, 784564, 123456, 234567, 345678,
        456789, 567890, 456, 8797, 7984,
      ],
    },
  ];

  const { response: employees } = useRequest(getEmployeesRequest);
  const { response: customers } = useRequest(getCustomersRequest);
  const [totalEmployees, setTotalEmployees] = useState<string>("0");
  const [totalCustomers, setTotalCustomers] = useState<string>("0");

  useEffect(() => {
    setTotalEmployees(employees?.data.data.length);
    setTotalCustomers(customers?.data.data.length);
  }, [employees, customers]);

  return (
    <>
      <Header title="Panel de control" />

      <section className="flex flex-col lg:flex-row justify-between gap-4">
        <StatCard
          title="Total User"
          counter="40,689"
          icon={<MdOutlineGroup />}
          iconColor="#8280ff"
          percentage="8.5"
          detail="Up from yesterday"
          isUp={true}
        />
        <StatCard
          title="Total Order"
          counter="10293"
          icon={<MdOutlineInbox />}
          iconColor="#fec53d"
          percentage="8.5"
          detail="Up from past  week"
          isUp={true}
        />
        <StatCard
          title="Total Clientes"
          counter={totalCustomers}
          icon={<MdOutlinePeople />}
          iconColor="#4ad991"
          percentage="4.3"
          detail="Down from yesterday"
          isUp={false}
        />
        <StatCard
          title="Total Empleados"
          counter={totalEmployees}
          icon={<MdOutlineSupervisorAccount />}
          iconColor="#ff9066"
          percentage="1.8"
          detail="Up from yesterday"
          isUp={true}
        />
      </section>

      <section className="mt-[30px] px-8 py-[37px] bg-white rounded-[14px]">
        <h2 className="font-bold text-2xl text-[#202224]">Sales Details</h2>

        <Chart options={options} series={series} type="area" height={350} />
      </section>
    </>
  );
}
