import { signalStoreFeature, withState } from '@ngrx/signals';
import { User } from '../models/user';

type State = {
  user: User;
};

const initialState: State = {
  user: {
    id: 42,
    username: 'fflintstone',
    firstName: 'Fred',
    lastName: 'Flintstone',
  },
};

export function withUserStore<_>() {
  return signalStoreFeature(withState(initialState));
}
