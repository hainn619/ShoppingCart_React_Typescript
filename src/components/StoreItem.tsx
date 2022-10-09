import { Card, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContex';
import {formatCurrency} from '../utilities/formatCurrency';

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem ({id, name, price, imgUrl}: StoreItemProps) {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()

    const quantity = getItemQuantity(id)
    function Additemhandler() {
        console.log("click")
    }
    return (
        <Card className='h-100'>
            <Card.Img src={imgUrl} variant="top" height="200px" style={{ objectFit:"cover"}} />
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-4'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                  {quantity === 0 ?
                        <Button className="w-100 bg-primary" onClick={() => increaseCartQuantity(id)} >Add To Cart</Button>
                   : (
                   <div className="d-flex align-items-center flex-column"
                   style={{ gap: ".5rem" }}>
                    <div className='d-flex align-items-center justify-content-center' style={{gap:"0.5rem"}}>
                            <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                            <div><span className="fs-5">{quantity} </span>in cart
                            
                            </div>
                            <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button onClick={()=>removeFromCart(id)} variant='danger'>Remove</Button>
                    </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}