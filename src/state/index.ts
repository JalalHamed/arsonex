import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const themeModeAtom = atomWithStorage<'dark' | 'light'>('theme.mode', 'light');
export function useThemeModeAtom() {
  return useAtom(themeModeAtom);
}
