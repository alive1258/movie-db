import Landing from '@/components/Landing'
import { getDictionary } from './dictionaries'

export default async function Homepage({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <div>
      <Landing dict={dict} />
    </div>
  )
}
