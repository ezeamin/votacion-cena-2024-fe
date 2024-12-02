import type { Person } from '@/types';

type Props = {
  person: Person;
  setSelectedPerson: (person: string) => void;
};

const PersonOption = (props: Props) => {
  const { person, setSelectedPerson } = props;

  return (
    <div className="form-control">
      <label
        htmlFor={person.id}
        className="flex cursor-pointer items-center gap-3 py-3"
      >
        <input
          id={person.id}
          type="radio"
          name="selected-person"
          value={person.id}
          className="radio checked:bg-[#7480ff]"
          onClick={() => setSelectedPerson(person.id)}
        />
        <span>{person.name}</span>
      </label>
    </div>
  );
};
export default PersonOption;
