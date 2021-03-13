import { useForm } from 'react-hook-form';
import { getPropPath } from 'property-string-path';

import { User } from './user.model';
import { useEffect } from 'react';
import './App.css';

export const App = () => {
  const formKeys = getPropPath<User>();
  const { register, watch } = useForm<User>();

  const lat = watch(formKeys('address.geo.lat'));

  useEffect(() => {
    console.log(lat);
  }, [lat]);

  return (
    <div className="App">
      <form>
        <input name={formKeys('address.geo.lat')} ref={register} />
      </form>
    </div>
  );
};
