
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Smartphone, Wallet, QrCode } from 'lucide-react';

const PaymentPopup = ({ 
  open, 
  onOpenChange 
}: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void 
}) => {
  const { toast } = useToast();
  const [paymentTab, setPaymentTab] = useState("mobile");
  
  const handlePayment = (method: string) => {
    toast({
      title: "Payment Initiated",
      description: `You're being redirected to ${method} payment.`,
    });
    
    // Here you would typically redirect to a payment gateway or process the payment
    // For now, we'll just simulate a successful payment with a delay
    setTimeout(() => {
      toast({
        title: "Payment Success",
        description: "Your payment was successful!",
      });
      onOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-4 sm:p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle>Make a Payment</DialogTitle>
          <DialogDescription>
            Choose your preferred payment method.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs 
          defaultValue="mobile" 
          value={paymentTab}
          onValueChange={setPaymentTab}
          className="mt-4"
        >
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="mobile" className="flex flex-col items-center p-2">
              <Smartphone className="h-4 w-4 mb-1" />
              <span className="text-xs">Mobile</span>
            </TabsTrigger>
            <TabsTrigger value="paypal" className="flex flex-col items-center p-2">
              <CreditCard className="h-4 w-4 mb-1" />
              <span className="text-xs">PayPal</span>
            </TabsTrigger>
            <TabsTrigger value="usdt" className="flex flex-col items-center p-2">
              <Wallet className="h-4 w-4 mb-1" />
              <span className="text-xs">USDT</span>
            </TabsTrigger>
            <TabsTrigger value="qrcode" className="flex flex-col items-center p-2">
              <QrCode className="h-4 w-4 mb-1" />
              <span className="text-xs">QR</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="mobile" className="mt-0">
            <Card>
              <CardContent className="pt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Mobile Money</h3>
                  <p className="text-sm text-gray-500">Send payment to one of these mobile money accounts:</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium">Orange Money</p>
                      <p>+221 77 123 4567</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium">MTN Money</p>
                      <p>+221 77 765 4321</p>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-4"
                    variant="default"
                    onClick={() => handlePayment('Mobile Money')}
                  >
                    <Smartphone className="h-4 w-4 mr-2" />
                    Pay with Mobile Money
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="paypal" className="mt-0">
            <Card>
              <CardContent className="pt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">PayPal</h3>
                  <p className="text-sm text-gray-500">Secure payment via PayPal</p>
                  
                  <Button 
                    className="w-full mt-4 bg-[#0070ba] hover:bg-[#005ea6]"
                    onClick={() => handlePayment('PayPal')}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay with PayPal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="usdt" className="mt-0">
            <Card>
              <CardContent className="pt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">USDT (Tether)</h3>
                  <p className="text-sm text-gray-500">Send USDT to this wallet address:</p>
                  
                  <div className="bg-gray-50 p-3 rounded-lg break-all">
                    <p className="font-medium text-xs">Wallet Address (TRC20)</p>
                    <p className="text-sm">TRx942kLd8anBESYVrvfJce5TY8RT593Vx</p>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-[#26a17b] hover:bg-[#1a7d5b]"
                    onClick={() => handlePayment('USDT')}
                  >
                    <Wallet className="h-4 w-4 mr-2" />
                    I've Sent USDT
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="qrcode" className="mt-0">
            <Card>
              <CardContent className="pt-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">QR Code Payment</h3>
                  <p className="text-sm text-gray-500">Scan this QR code with your mobile banking app:</p>
                  
                  <div className="flex justify-center py-4">
                    <div className="w-36 sm:w-48 h-36 sm:h-48 bg-gray-200 flex items-center justify-center">
                      <QrCode className="h-24 sm:h-32 w-24 sm:w-32 text-gray-500" />
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-2"
                    variant="default"
                    onClick={() => handlePayment('QR Code')}
                  >
                    <QrCode className="h-4 w-4 mr-2" />
                    I've Scanned the QR Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentPopup;
