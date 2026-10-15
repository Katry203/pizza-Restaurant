import { useLoaderData } from "react-router-dom";
import { getMenu, type MenuItem as Pizza } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

// مكون Menu
function Menu() {
  const menu = useLoaderData() as Pizza[];

  return (
    <main className="menu-page mx-auto mt-24 min-h-screen max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 text-center">
        <p className="eyebrow">Fresh from our oven</p>
        <h1 className="text-4xl font-bold sm:text-5xl">Our Menu</h1>
        <p className="mx-auto mt-3 max-w-xl text-[var(--muted)]">
          Hand-stretched dough, generous toppings, and a little bit of magic in every slice.
        </p>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </main>
  );
}

// الدالة loader لتحميل البيانات
export async function loader(): Promise<Pizza[]> {
  const menu = await getMenu(); // جلب البيانات من الـ API
  return menu;
}

export default Menu;
