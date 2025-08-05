import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Trash2, Upload, ChevronDown, ChevronUp, Edit } from 'lucide-react-native'; 
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('order');

  const router = useRouter();
  
  // Initialize items with isExpanded property
  const [items, setItems] = useState([
    { 
      id: 1, 
      name: 'Grape', 
      price: 5500, 
      quantity: 1, 
      image: require('@/assets/grape.png'),
      isExpanded: false 
    },
    { 
      id: 2, 
      name: 'Grape', 
      price: 5500, 
      quantity: 1, 
      image: require('@/assets/grape.png'),
      isExpanded: false 
    },
    { 
      id: 3, 
      name: 'Grape', 
      price: 5500, 
      quantity: 1, 
      image: require('@/assets/grape.png'),
      isExpanded: false 
    },
  ]);

  const [packItem, setPackItem] = useState({
    price: 5000,
    quantity: 1
  });

  const [deliveryInfo, setDeliveryInfo] = useState({
    address: '',
    phone: '',
    notes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  // Update quantity for items
  const updateQuantity = (id, amount) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Update pack quantity
  const updatePackQuantity = (amount) => {
    setPackItem(prev => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + amount)
    }));
  };

  // Delete item
  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  // Toggle item expanded state
  const toggleItemExpanded = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, isExpanded: !item.isExpanded }
          : item
      )
    );
  };

  // Calculate total price
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0) + 
                    (packItem.price * packItem.quantity);

  return (
    <View className="flex-1 bg-white px-4 pt-0">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("@/assets/images/Back.png")}
            className="w-8 h-8"
            contentFit="contain"
          />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-gray-700">Checkout</Text>
        <View className="w-8" />
      </View>

      {/* Tabs */}
      <View className="flex-row justify-center mt-4 gap-5">
        <TouchableOpacity 
          onPress={() => setActiveTab('order')}
          className={`pb-1 ${activeTab === 'order' ? 'border-b-2 border-[#4CAF50]' : ''}`}
        >
          <Text className={`px-20 font-medium ${activeTab === 'order' ? 'text-[#4CAF50]' : 'text-gray-400'}`}>
            Your Order
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => setActiveTab('delivery')}
          className={`pb-1 ${activeTab === 'delivery' ? 'border-b-2 border-[#4CAF50]' : ''}`}
        >
          <Text className={`px-4 font-medium ${activeTab === 'delivery' ? 'text-[#4CAF50]' : 'text-gray-400'}`}>
            Delivery & Payment
          </Text>
        </TouchableOpacity>
      </View>

      {/* Conditional Content */}
      {activeTab === 'order' ? (
        <ScrollView className="mt-6">
          {/* Order Header */}
          <View className="flex-row justify-between items-center mb-2 px-4">
            <Text className="text-lg font-semibold text-gray-700">Order 1</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-[#4CAF50] text-sm mr-1">Rename Order</Text>
              <Edit width={16} height={16} color="#4CAF50" />
            </TouchableOpacity>
          </View>

          {/* Main Order Box */}
          <View className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            {/* Order Summary Section */}
            <View className="mb-4">
              <View className="flex-row justify-between items-center">
                <Text className="text-sm text-[#939393]">Order Summary</Text>
                <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? (
                    <ChevronUp width={16} height={16} color="#939393" />
                  ) : (
                    <ChevronDown width={16} height={16} color="#939393" />
                  )}
                </TouchableOpacity>
              </View>

              {/* Collapsible Content */}
              {isExpanded && (
                <>
                  <View className="flex-row items-center justify-between py-1 mt-3">
                    <Image
                      source={require('@/assets/grape.png')}
                      className="w-16 h-16 rounded"
                      resizeMode="cover"
                    />
                  </View>

                  <View className="flex-row items-center justify-between mt-2">
                    <View>
                      <Text className="text-gray-600">Pack</Text>
                      <Text className="text-black font-semibold text-sm">
                        NGN {(packItem.price * packItem.quantity).toLocaleString()}
                      </Text>
                    </View>
                    <View className="flex-row items-center h-7 bg-gray-100 rounded-md overflow-hidden">
                      <TouchableOpacity 
                        className="w-6 items-center justify-center active:bg-gray-200"
                        onPress={() => updatePackQuantity(-1)}
                      >
                        <Text className="text-black text-xs">−</Text>
                      </TouchableOpacity>
                      
                      <View className="w-6 items-center justify-center">
                        <Text className="text-black text-xs">{packItem.quantity}</Text>
                      </View>
                      
                      <TouchableOpacity 
                        className="w-6 items-center justify-center active:bg-gray-200"
                        onPress={() => updatePackQuantity(1)}
                      >
                        <Text className="text-black text-xs">+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              )}
            </View>

            {/* Divider */}
            <View className="border-b border-gray-100 my-3" />

            {/* Items List */}
            <View>
              {items.map((item, index) => (
                <View key={item.id}>
                  <View className="flex-row items-center justify-between py-3">
                    <Image
                      source={item.image}
                      className="w-16 h-16 rounded"
                      resizeMode="cover"
                    />
                    <View className="flex-1 ml-3">
                      <Text className="text-black font-medium">{item.name}</Text>
                      <Text className="text-[#939393] text-xs">1 Items - NGN {item.price}</Text>
                    </View>
                    <View className="items-end">
                      <TouchableOpacity 
                        onPress={() => toggleItemExpanded(item.id)}
                        className="p-1 mb-1"
                      >
                        {item.isExpanded ? (
                          <ChevronUp width={16} height={16} color="#939393" />
                        ) : (
                          <ChevronDown width={16} height={16} color="#939393" />
                        )}
                      </TouchableOpacity>
                      <View className="flex-row space-x-2">
                        <TouchableOpacity className="bg-green-100 p-2 rounded-full">
                          <Upload size={16} color="#4CAF50" />
                        </TouchableOpacity>
                        <TouchableOpacity 
                          className="bg-red-100 p-2 rounded-full"
                          onPress={() => deleteItem(item.id)}
                        >
                          <Trash2 size={16} color="red" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                  {/* Expanded Item Details */}
                  {item.isExpanded && (
                    <View className="rounded-md mb-3">
                      <View className="flex-row justify-between items-center mb-1">
                        <Text className="text-gray-600">Quantity</Text>
                        <View className="flex-row items-center border border-gray-200 rounded-md h-8">
                          <TouchableOpacity 
                            className="w-8 items-center justify-center bg-gray-100"
                            onPress={() => updateQuantity(item.id, -1)}
                          >
                            <Text className="text-black text-sm">-</Text>
                          </TouchableOpacity>
                          <View className="w-8 items-center justify-center border-x border-gray-200">
                            <Text className="text-black text-sm">{item.quantity}</Text>
                          </View>
                          <TouchableOpacity 
                            className="w-8 items-center justify-center bg-gray-100"
                            onPress={() => updateQuantity(item.id, 1)}
                          >
                            <Text className="text-black text-sm">+</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View className="flex-row justify-between">
                        <Text className="text-#939393 font-semibold text-sm">
                          NGN {item.price * item.quantity}
                        </Text>
                      </View>
                    </View>
                  )}

                  {index !== items.length - 1 && (
                    <View className="border-b border-gray-100" />
                  )}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <ScrollView className="mt-6">
          <View className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <Text className="text-lg font-semibold mb-4">Delivery Information</Text>
            
            <View className="mb-4">
              <Text className="text-sm text-gray-600 mb-1">Delivery Address</Text>
              <View className="border border-gray-200 rounded-lg p-3">
                <Text className="text-gray-400">Enter your delivery address</Text>
              </View>
            </View>
            
            <View className="mb-4">
              <Text className="text-sm text-gray-600 mb-1">Phone Number</Text>
              <View className="border border-gray-200 rounded-lg p-3">
                <Text className="text-gray-400">Enter your phone number</Text>
              </View>
            </View>
            
            <View className="mb-4">
              <Text className="text-sm text-gray-600 mb-1">Delivery Notes (Optional)</Text>
              <View className="border border-gray-200 rounded-lg p-3 h-20">
                <Text className="text-gray-400">Any special instructions?</Text>
              </View>
            </View>
          </View>

          <View className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <Text className="text-lg font-semibold mb-4">Payment Method</Text>
            
            <TouchableOpacity 
  className={`flex-row justify-between items-center p-3 border rounded-lg mb-2 ${paymentMethod === 'card' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-200'}`}
  onPress={() => setPaymentMethod('card')}
>
  <View className="flex-col">
    <Text className=" text-[#4A4A4A] font-medium">NGN 0</Text>
    <Text className=" text-[#4A4A4A] font-medium text-xs">Wallet</Text>
  </View>

  <View className={`w-5 h-5 rounded-full border ${paymentMethod === 'card' ? 'bg-[#4CAF50] border-[#4CAF50]' : 'border-gray-300'}`} />
</TouchableOpacity>

            
           <TouchableOpacity 
            className={`flex-row justify-between items-center p-3  mb-2 border rounded-lg ${paymentMethod === 'cash' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-200'}`}
            onPress={() => setPaymentMethod('cash')}
          >
            <Text className=" text-[#4A4A4A] font-medium">Pay with Card</Text>

            <View className={`w-5 h-5 rounded-full border ${paymentMethod === 'cash' ? 'bg-[#4CAF50] border-[#4CAF50]' : 'border-gray-300'}`} />
          </TouchableOpacity>

          <TouchableOpacity 
  className={`flex-row justify-between items-center p-3 border rounded-lg ${
    paymentMethod === 'payForMe' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-200'
  }`}
  onPress={() => setPaymentMethod('payForMe')}
>
  <Text className="font-medium text-[#4A4A4A]">Pay for me</Text>

  <View className={`w-5 h-5 rounded-full border ${
    paymentMethod === 'payForMe' ? 'bg-[#4CAF50] border-[#4CAF50]' : 'border-gray-300'
  }`} />
</TouchableOpacity>
          </View>
        </ScrollView>
      )}

      {activeTab === 'order' && (
        <TouchableOpacity 
          className="bg-[#4CAF50] p-4 rounded-xl mt-4 mb-6"
          onPress={() => setActiveTab('delivery')}
        >
          <Text className="text-white text-center text-base font-semibold">
            Proceed to Delivery - ₦{totalPrice.toLocaleString()}
          </Text>
        </TouchableOpacity>
      )}

      {activeTab === 'delivery' && (
        <TouchableOpacity 
        className="bg-[#4CAF50] p-4 rounded-xl mt-4 mb-6"
        onPress={() => {
          // setShowSuccessModal(false);
         router.push({ pathname: "/wallets", params: { totalAmount: totalPrice } });// OR router.push("/wallets");
        }}
      >
        <Text className="text-white text-center text-base font-semibold">
          Place Order - ₦{totalPrice.toLocaleString()}
        </Text>
      </TouchableOpacity>
      )}
    </View>
  );
};

export default CheckoutScreen;