import { Icons } from './Icons'
import Link from 'next/link'
import UserAuthForm from './UserAuthForm'
import { Button } from '@/ui-components/Button'

const SignIn = () => {
    return (
        <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
            <div className='flex flex-col space-y-2 text-center '>
                <Icons.logo className='mx-auto h-10 w-10' />
                <h1 className='text-4xl font-semibold tracking-tight'>Bienvenido de nuevo</h1>
                <p className='text-sm max-w-s mx-auto'>
                    Al hacer clic en 'Continuar', aceptas nuestras Condiciones de Uso, Política de Privacidad y Política de Cookies. Te recomendamos que las leas detenidamente antes de continuar.
                </p>

                {/* Formulario de Registro*/}
                <UserAuthForm />

                <p className='px-8 text-center text-sm text-zinc-700'>
                    Aun no eres usuario de TechVentures?{' '}
                    <Link href='/sign-up'>
                        <button className='hover:text-zinc-800 text-sm underline underline-offset-4'>
                            Registrarse
                        </button>
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default SignIn
