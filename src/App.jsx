import TodoApp from "./components/Todo/TodoApp";
import UserForm from "./components/Forms/UserForm";
import MultiProgressBar from "./components/Progress/MultiProgressBar";
import CountdownTimer from "./components/Timer/CountdownTimer";
import SearchList from "./components/Search/SearchList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <TodoApp />
        <UserForm />
        <MultiProgressBar />
        <CountdownTimer />
        <SearchList />
      </div>
    </div>
  );
}
