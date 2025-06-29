export default function JarvisPropsDashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Jarvis Props</h1>

      {/* Bankroll Tracker */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Bankroll Tracker</h2>
        {/* Add bankroll input, unit calculator */}
      </section>

      {/* Prop Feed */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Prop Feed</h2>
        {/* Props displayed here with % chance and writeup */}
      </section>

      {/* Slip Builder */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Slip Builder</h2>
        {/* Select props, view EV, confirm PrizePicks rules */}
      </section>

      {/* Manual Input + Screenshot Upload */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Manual Entry</h2>
        {/* Allow screenshot upload or manual profit/loss logging */}
      </section>
    </main>
  );
}
