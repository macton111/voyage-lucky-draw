
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Lock, 
  Save, 
  Loader2, 
  CreditCard, 
  Clock,
  CheckCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Profile = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPasswordSubmitting, setIsPasswordSubmitting] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'Aminata',
    lastName: 'Diallo',
    email: 'aminata.diallo@example.com',
    phone: '+221 77 123 4567',
    country: 'Senegal',
  });
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value
    });
  };
  
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Profile Updated",
        description: "Your profile information has been updated successfully.",
      });
    }, 1500);
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all password fields",
        variant: "destructive"
      });
      return;
    }
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match",
        variant: "destructive"
      });
      return;
    }
    
    setIsPasswordSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsPasswordSubmitting(false);
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      toast({
        title: "Password Updated",
        description: "Your password has been changed successfully.",
      });
    }, 1500);
  };
  
  const paymentMethods = [
    { id: 1, type: 'Mobile Money', provider: 'Orange Money', number: '****7890', isDefault: true },
    { id: 2, type: 'Bank Card', provider: 'Visa', number: '****4567', isDefault: false },
  ];
  
  const transactions = [
    { id: 1, date: '2023-07-05', amount: '2,000 FCFA', status: 'completed', description: 'July 2023 Draw Entry' },
    { id: 2, date: '2023-06-03', amount: '2,000 FCFA', status: 'completed', description: 'June 2023 Draw Entry' },
    { id: 3, date: '2023-05-02', amount: '2,000 FCFA', status: 'completed', description: 'May 2023 Draw Entry' },
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">My Profile</h1>
              <p className="text-gray-600">Manage your account information and settings</p>
            </div>
          </div>
          
          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid grid-cols-3 md:w-[400px] bg-white shadow-subtle">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="space-y-6 animate-fade-in">
              <Card className="shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-xl">Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-voyage-primary" />
                          First Name
                        </Label>
                        <Input 
                          id="firstName"
                          name="firstName"
                          value={userData.firstName}
                          onChange={handleProfileChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-voyage-primary" />
                          Last Name
                        </Label>
                        <Input 
                          id="lastName"
                          name="lastName"
                          value={userData.lastName}
                          onChange={handleProfileChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-voyage-primary" />
                          Email
                        </Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={userData.email}
                          onChange={handleProfileChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-voyage-primary" />
                          Phone Number
                        </Label>
                        <Input 
                          id="phone"
                          name="phone"
                          value={userData.phone}
                          onChange={handleProfileChange}
                        />
                      </div>
                      
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="country" className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-voyage-primary" />
                          Country
                        </Label>
                        <select
                          id="country"
                          name="country"
                          value={userData.country}
                          onChange={handleProfileChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {[
                            "Benin", "Burkina Faso", "Cameroon", "Central African Republic", 
                            "Chad", "Congo", "Democratic Republic of Congo", "Gabon", "Ghana", 
                            "Ivory Coast", "Mali", "Niger", "Nigeria", "Senegal", "Togo"
                          ].map(country => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        className="rounded-xl py-6 px-6 bg-voyage-primary hover:bg-voyage-secondary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-6 animate-fade-in">
              <Card className="shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-xl">Security Settings</CardTitle>
                  <CardDescription>Manage your password and security preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePasswordSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword" className="flex items-center">
                          <Lock className="h-4 w-4 mr-2 text-voyage-primary" />
                          Current Password
                        </Label>
                        <Input 
                          id="currentPassword"
                          name="currentPassword"
                          type="password"
                          value={passwordData.currentPassword}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="newPassword" className="flex items-center">
                          <Lock className="h-4 w-4 mr-2 text-voyage-primary" />
                          New Password
                        </Label>
                        <Input 
                          id="newPassword"
                          name="newPassword"
                          type="password"
                          value={passwordData.newPassword}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="flex items-center">
                          <Lock className="h-4 w-4 mr-2 text-voyage-primary" />
                          Confirm New Password
                        </Label>
                        <Input 
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={handlePasswordChange}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        className="rounded-xl py-6 px-6 bg-voyage-primary hover:bg-voyage-secondary"
                        disabled={isPasswordSubmitting}
                      >
                        {isPasswordSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Updating...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            Update Password
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payment" className="space-y-6 animate-fade-in">
              <Card className="shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-xl">Payment Methods</CardTitle>
                  <CardDescription>Manage your payment options</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <div 
                        key={method.id}
                        className="p-4 border border-gray-100 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-voyage-accent flex items-center justify-center">
                            {method.type === 'Mobile Money' ? (
                              <Phone className="h-5 w-5 text-voyage-primary" />
                            ) : (
                              <CreditCard className="h-5 w-5 text-voyage-primary" />
                            )}
                          </div>
                          
                          <div className="ml-4">
                            <p className="font-medium">{method.provider}</p>
                            <p className="text-sm text-gray-600">
                              {method.type} • {method.number}
                              {method.isDefault && (
                                <span className="ml-2 text-voyage-primary font-medium">Default</span>
                              )}
                            </p>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm" className="rounded-lg">
                          Edit
                        </Button>
                      </div>
                    ))}
                    
                    <Button 
                      variant="outline" 
                      className="w-full rounded-xl py-6 border-dashed"
                    >
                      Add New Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-xl">Transaction History</CardTitle>
                  <CardDescription>Your recent payment activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.map((transaction) => (
                      <div 
                        key={transaction.id}
                        className="p-4 border border-gray-100 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-voyage-accent flex items-center justify-center">
                            {transaction.status === 'completed' ? (
                              <CheckCircle className="h-5 w-5 text-voyage-success" />
                            ) : (
                              <Clock className="h-5 w-5 text-voyage-warning" />
                            )}
                          </div>
                          
                          <div className="ml-4">
                            <p className="font-medium">{transaction.description}</p>
                            <p className="text-sm text-gray-600">
                              {new Date(transaction.date).toLocaleDateString()} • {transaction.amount}
                            </p>
                          </div>
                        </div>
                        
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          transaction.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {transaction.status === 'completed' ? 'Completed' : 'Pending'}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
