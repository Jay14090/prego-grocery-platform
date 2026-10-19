import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { useLocation } from 'react-router-dom'
import toast from 'react-hot-toast'

const Loading = () => {

    const { navigate, axios, setCartItems } = useAppContext()
    let { search } = useLocation()
    const query = new URLSearchParams(search)
    const nextUrl = query.get('next');
    const sessionId = query.get('session_id');

    useEffect(()=>{
        let cancelled = false;
        const finish = async ()=>{
            // Coming back from Stripe Checkout — verify the payment, mark it
            // paid and clear the cart (works without a public webhook URL).
            if(sessionId){
                try {
                    const { data } = await axios.post('/api/order/verify-stripe', { sessionId })
                    if(data.success){
                        setCartItems({})
                        toast.success("Payment successful")
                    }else{
                        toast.error(data.message || "Payment not completed")
                    }
                } catch (error) {
                    toast.error(error.message)
                }
            }
            if(!cancelled && nextUrl){
                navigate(`/${nextUrl}`)
            }
        }

        const timer = setTimeout(finish, sessionId ? 1500 : 5000)
        return ()=>{ cancelled = true; clearTimeout(timer) }
    },[nextUrl, sessionId])

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-primary'></div>
    </div>
  )
}

export default Loading
