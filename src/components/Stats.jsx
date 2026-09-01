export default function Stats() {
  const statsData = [
    { value: '180+', label: 'Câmeras ativas' },
    { value: '37', label: 'Perímetros cobertos' },
    { value: '<40s', label: 'Tempo médio de resposta' },
    { value: '99.9%', label: 'Disponibilidade da rede' },
  ];

  return (
    <section className="stats">
      <div className="stats-inner">
        {statsData.map((stat, i) => (
          <div key={i} className="stat">
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}