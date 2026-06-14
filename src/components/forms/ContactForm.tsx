"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { FiCheckCircle, FiLoader } from "react-icons/fi";

const subjects = [
  { value: "commercial-real-estate", label: "Commercial Real Estate" },
  { value: "family-law", label: "Family Law" },
  { value: "commercial-litigation", label: "Commercial Litigation" },
  { value: "products-liability", label: "Products Liability" },
  { value: "general", label: "General Inquiry" },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    console.log("Submitting form data:", data);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("API response:", result);

      if (!response.ok) {
        throw new Error(result.error || result.details || "Failed to send message");
      }

      setIsSuccess(true);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message", {
        description: error instanceof Error ? error.message : "Please try again or contact us directly.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-xl p-8"
    >
      <h3 className="font-heading text-2xl font-bold text-navy mb-6">
        Send us a Message
      </h3>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-success/10 border border-success text-success rounded-lg p-4 mb-6 flex items-center gap-3"
        >
          <FiCheckCircle size={24} />
          <div>
            <p className="font-semibold">Message Sent Successfully!</p>
            <p className="text-sm">We'll get back to you within 24 hours.</p>
          </div>
        </motion.div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-navy font-medium">
                    First Name *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John"
                      {...field}
                      className="border-gray-300 focus:border-accent-red focus:ring-accent-red"
                    />
                  </FormControl>
                  <FormMessage className="text-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-navy font-medium">
                    Last Name *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Doe"
                      {...field}
                      className="border-gray-300 focus:border-accent-red focus:ring-accent-red"
                    />
                  </FormControl>
                  <FormMessage className="text-error" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-navy font-medium">
                    Email Address *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                      className="border-gray-300 focus:border-accent-red focus:ring-accent-red"
                    />
                  </FormControl>
                  <FormMessage className="text-error" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-navy font-medium">
                    Phone Number *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+254 700 000 000"
                      {...field}
                      className="border-gray-300 focus:border-accent-red focus:ring-accent-red"
                    />
                  </FormControl>
                  <FormMessage className="text-error" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">
                  Subject *
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value || ""}
                >
                  <FormControl>
                    <SelectTrigger className="border-gray-300 focus:border-accent-red focus:ring-accent-red">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject.value} value={subject.value}>
                        {subject.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">
                  Message *
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your legal needs..."
                    rows={5}
                    {...field}
                    className="border-gray-300 focus:border-accent-red focus:ring-accent-red resize-none"
                  />
                </FormControl>
                <FormMessage className="text-error" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent-red hover:bg-navy text-white py-3 text-lg"
          >
            {isSubmitting ? (
              <>
                <FiLoader className="mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}