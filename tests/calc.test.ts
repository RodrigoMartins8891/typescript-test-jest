// Adicione 'multiply' dentro das chaves do import:
import { add, multiply } from '../src/ts/calc';
import Cart from '../src/cart/cart'; // Ajuste o caminho conforme sua estrutura
import Product from '../src/products/product'; 

describe('Test CALC', () => {
  it("should return 15 for add (10,5)", () => {
    expect(add(10, 5)).toBe(15);
  });
});

describe('Test CALC - Multiply', () => {
  it("should return 20 for multiply (4,5)", () => {
    expect(multiply(4, 5)).toBe(20); // Agora a função será reconhecida
  });
});


describe('Cart Class - Novas Funcionalidades', () => {
  let cart: Cart;
  let product1: Product;
  let product2: Product;

  beforeEach(() => {
    cart = new Cart();
    // Simulando produtos com a propriedade 'price' necessária para o teste
    product1 = { name: 'Livro', price: 50.00 } as Product;
    product2 = { name: 'Jogo', price: 150.50 } as Product;
  });

  it('should return true for isEmpty on a new cart', () => {
    expect(cart.isEmpty()).toBe(true);
  });

  it('should return false for isEmpty after adding an item', () => {
    cart.addItem(product1);
    expect(cart.isEmpty()).toBe(false);
  });

  it('should calculate the total price of items correctly', () => {
    cart.addItem(product1);
    cart.addItem(product2);
    expect(cart.total).toBe(200.50);
  });

  it('should return 0 for total when cart is empty', () => {
    expect(cart.total).toBe(0);
  });
  it('should clear all items from the cart', () => {
  cart.addItem(product1);
  cart.addItem(product2);
  
  expect(cart.items.length).toBe(2);
  
  cart.clear();
  
  expect(cart.items.length).toBe(0);
  expect(cart.isEmpty()).toBe(true);
  expect(cart.total).toBe(0);
});

});
