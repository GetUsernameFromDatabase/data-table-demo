import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import { DateTime } from "luxon";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { type TTableColumnData, columnInformation } from "./demo-table-columns";
import { Calendar } from "./ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useToast } from "./ui/use-toast";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { storedHuntsmen } from "@/data/data-huntsmen";
import { storedTransactions } from "@/data/data-transactions";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  name: z.string({ required_error: "Jahimehe täisnimi on vajalik" }).refine(
    (value) => {
      const words = value.split(" ");
      return (
        words.length >= 2 && words.every((word) => /^[A-Z][a-z]*$/.test(word))
      );
    },
    {
      message:
        "Täisnimi suure algustähtetega, ülejäänud tähed peavad väiksed olema",
    },
  ),
  hunting_licence: z.string({ required_error: "Jahimehe litsents on vajalik" }),
  agreement_date: z.date({
    required_error: "Kokkuleppe kuupäev on vajalik",
  }),
  payment_to_huntsman: z.string(),
  // TODO: use array
  // payment_to_huntsman: z.array(z.string()).refine(
  //   (value) => {
  //     return value.length > 0;
  //   },
  //   {
  //     message: "Payment data must not be empty",
  //   },
  // ),
});
interface TDemoTableAddEntryProperties {
  triggerClassName?: string;
  setTableData?: React.Dispatch<React.SetStateAction<TTableColumnData[]>>;
}
export function DemoTableAddEntry({
  setTableData,
  ...properties
}: TDemoTableAddEntryProperties) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { toast } = useToast();
  console.log(setTableData);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Lisatud andmed:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    if (setTableData) {
      const newValue = {
        ...data,
        payment_to_huntsman: [data.payment_to_huntsman],
      };
      setTableData((previousValue) => [...previousValue, newValue]);
    }
  }

  const display = {
    title: "Lisa rida",
  };
  return (
    <Dialog>
      <DialogTrigger asChild className={properties.triggerClassName}>
        <Button variant="outline">{display.title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{display.title}</DialogTitle>
          <DialogDescription>
            Täida vajalikud andmeväljad, et lisada rida
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{columnInformation[field.name].label}</FormLabel>
                  <FormControl>
                    <Input placeholder={storedHuntsmen[0].name} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hunting_licence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{columnInformation[field.name].label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={storedHuntsmen[0].hunting_licence}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="payment_to_huntsman"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{columnInformation[field.name].label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={storedTransactions[0].payment_to_huntsman[0]}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agreement_date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>{columnInformation[field.name].label}</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            DateTime.fromJSDate(field.value).toFormat("DDDD")
                          ) : (
                            <span>Vali kuupäev</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Kuupäev, millal kokkulepe sai sõlmitud
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Esita Andmed</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
