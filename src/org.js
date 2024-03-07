import OrganizationChart from '@dabeng/react-orgchart';

function OrgChartComponent() {
  const ds = {
    id: 'a1',
    name: 'KRISHNAAAA',
    title: 'RandomTitle1',
    department: 'Finance',
    children: [
      {
        id: 'a2',
        name: 'A2',
        title: 'RandomTitle2',
        department: 'Human Resources',
        children: [
          {
            id: 'a4',
            name: 'a4',
            title: 'RandomTitle3',
            department: 'Marketing',

            children: [],
          },
          {
            id: 'a5',
            name: 'a5',
            title: 'RandomTitle4',
            department: 'Sales',
            children: [],
          },
          {
            id: 'a6',
            name: 'a6',
            title: 'RandomTitle5',
            department: 'Engineering',
            children: [],
          },
        ],
      },
      {
        id: 'a3',
        name: 'a3',
        title: 'RandomTitle6',
        department: 'Operations',
        children: [
          {
            id: 'a7',
            name: 'a7',
            title: 'RandomTitle7',
            department: 'Customer Service',
            children: [],
          },
        ],
      },
    ],
  };
  const nodeContent = (node) => (
    <div>
      <div>ID: {node.id}</div>
      <div>Name: {node.name}</div>
      <div>Title: {node.title}</div>
      <div>Department: {node.department}</div>
    </div>
  );

  return (
    <>
      <OrganizationChart datasource={ds} pan={true} zoom={true} customNode={nodeContent} />
    </>
  );
}

export default OrgChartComponent;
