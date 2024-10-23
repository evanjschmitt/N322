import { useAuth } from '@clerk/clerk-expo';
import { Stack, Redirect } from 'expo-router'

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

if (isSignedIn) {
  return <Redirect href= "/tabs" />
} else
  return <Stack />;
}