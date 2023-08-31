import { useSelector } from 'react-redux'
import CheckoutStatus from '../../components/checkout-status'
import Item from './item'
import { RootState } from 'store'
import { useEffect, useState } from 'react'

const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart)

  const [images, setImages] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://soleauthenticity.azurewebsites.net/api/products/cus',
      )
      const resData = await res.json()
      let ids = cartItems.map((a: any) => a.id)
      let newArr = resData.data.filter((x: any) => ids.includes(x.id))
      console.log('New arr', newArr)
      setImages(newArr)
      // console.log("Cart item: ", cartItems)
    }

    fetchData()
  }, [cartItems])

  // console.log("Cart Item: ", cartItems);

  const priceTotal = () => {
    let totalPrice = 0
    if (cartItems.length > 0) {
      cartItems.map((item) => {
        console.log(item.noDiscount)
        if (item.salePrice != null) {
          totalPrice += item.salePrice * item.count
        } else {
          totalPrice += item.noDiscount * item.count
        }
      })
    }

    return totalPrice
  }

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      // Navigate to checkout page
      window.location.href = '/cart/checkout'
    } else {
      // Show alert
      alert('You have no products in your cart to checkout.')
    }
  }

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Giỏ hàng</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 && (
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: 'left' }}>Tên sản phẩm</th>
                  <th>Màu</th>
                  <th>Kích cỡ</th>
                  <th>Số lượng</th>
                  <th>Số tiền</th>
                  <th></th>
                </tr>

                {cartItems.map((item) => {
                  const testId = images?.filter((i: any) => i.id === item.id)
                  // console.log("testID: ", testId.slice(0, 1).shift()?.imgPath);
                  return (
                    <Item
                      key={item.id}
                      id={item.id}
                      imgPath={
                        testId && testId.length > 0
                          ? testId.slice(0, 1).shift()?.imgPath ?? ''
                          : ''
                      }
                      name={item.name}
                      color={item.color}
                      salePrice={item.salePrice}
                      noDiscount={item.noDiscount}
                      size={item.size}
                      count={item.count}
                    />
                  )
                })}
              </tbody>
            </table>
          )}

          {cartItems.length === 0 && <p>Chưa có sản phẩm trong cửa hàng</p>}
        </div>

        <div className="cart-actions">
          <a href="/products" className="cart__btn-back">
            <i className="icon-left"></i> Tiếp tục Shopping
          </a>
          <input
            type="text"
            placeholder="Mã giảm giá"
            className="cart__promo-code"
          />

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">
              Tổng tiền: <strong>{priceTotal().toFixed(2)} đ</strong>
            </p>
            {cartItems.length > 0 ? (
              <a href="/cart/checkout" className="btn btn--rounded btn--yellow">
                Thanh toán
              </a>
            ) : (
              <button
                className="btn btn--rounded btn--yellow"
                disabled
                onClick={handleCheckout}
                style={{ backgroundColor: cartItems.length === 0 ? '#e6e6e6' : '' }}
              >
                Thanh toán
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart
