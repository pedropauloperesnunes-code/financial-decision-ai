export default function GoalAlignmentCard({ alignment }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-bold mb-2">Goal Alignment</h2>
      <p>{alignment}</p>
    </div>
  );
}
