"use client";
import { Bell, Check, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";

export default function FirebaseNotificationConfig() {
  const handleSaveConfig = () => {
    toast({
      title: "Configuration saved",
      description:
        "Firebase notification configuration has been updated successfully.",
    });
  };

  const handleTestNotification = () => {
    toast({
      title: "Test notification sent",
      description: "A test push notification has been sent.",
    });
  };

  return (
    <div className="space-y-6 p-10">
      <div>
        <h1 className="text-3xl font-bold">Firebase Notification</h1>
        <p className="text-muted-foreground">
          Configure Firebase Cloud Messaging for push notifications
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Firebase Configuration</CardTitle>
              <CardDescription>
                Configure your Firebase Cloud Messaging settings
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                <Check className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-sm font-medium text-green-600">Active</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firebase-api-key">API Key</Label>
            <Input id="firebase-api-key" placeholder="AIzaSyA..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="firebase-auth-domain">Auth Domain</Label>
            <Input
              id="firebase-auth-domain"
              placeholder="your-app.firebaseapp.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="firebase-project-id">Project ID</Label>
            <Input id="firebase-project-id" placeholder="your-project-id" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="firebase-storage-bucket">Storage Bucket</Label>
            <Input
              id="firebase-storage-bucket"
              placeholder="your-app.appspot.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="firebase-messaging-sender-id">
              Messaging Sender ID
            </Label>
            <Input
              id="firebase-messaging-sender-id"
              placeholder="123456789012"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="firebase-app-id">App ID</Label>
            <Input
              id="firebase-app-id"
              placeholder="1:123456789012:web:abc123def456"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="firebase-server-key">Server Key</Label>
            <Input
              id="firebase-server-key"
              type="password"
              placeholder="AAAA..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="firebase-config-file">
              Firebase Configuration File (firebase-messaging-sw.js)
            </Label>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="w-full">
                <Upload className="mr-2 h-4 w-4" /> Upload Configuration File
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleTestNotification}>
            <Bell className="mr-2 h-4 w-4" /> Send Test Notification
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleSaveConfig}
          >
            Save Configuration
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>
            Configure push notification settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="enable-push">Enable Push Notifications</Label>
              <Switch id="enable-push" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">
              Enable or disable all push notifications
            </p>
          </div>

          <div className="space-y-2">
            <Label>Send Push Notifications For</Label>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="flex items-center space-x-2">
                <Switch id="push-new-order" defaultChecked />
                <Label htmlFor="push-new-order">New Orders</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="push-order-status" defaultChecked />
                <Label htmlFor="push-order-status">Order Status Updates</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="push-new-message" defaultChecked />
                <Label htmlFor="push-new-message">New Messages</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="push-promotions" />
                <Label htmlFor="push-promotions">Promotions</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notification-icon">Default Notification Icon</Label>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="w-full">
                <Upload className="mr-2 h-4 w-4" /> Upload Icon
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Recommended size: 192x192 pixels, PNG format
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="ml-auto bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleSaveConfig}
          >
            Save Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
