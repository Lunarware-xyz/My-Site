import stylesheet from '@/styles/signin.module.css';

export default function SignIn() {
    async function onSubmit(event) {
        event.preventDefault()
     
        const formData = new FormData(event.target)
        
        const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({
            token: formData.get('token'),
            password: formData.get('password'),
          }),
        })
     
        const data = await response.json()
      }
    

    return (
        <form className={stylesheet.form} onSubmit={onSubmit} >
            <input type="text" placeholder="Token" className={stylesheet.input} name="token"/>
            <input type="password" placeholder="Passphrase" className={stylesheet.input} name="password"/>
            <button type="submit" className={stylesheet.button}>Sign In</button>
        </form>
    )
}