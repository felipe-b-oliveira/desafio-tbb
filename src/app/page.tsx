"use client"

import styles from './page.module.scss';
import { ProductAmount } from '@/components/Header/products-amount';
import { FilterPanel } from "@/components/Filter/filter";
import { ProductsList } from "@/components/ProductsList/products-list";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <main className={styles.mainContainer}>
        <div className={styles.mainGridContainer}>
          <ProductAmount />
          <aside className={styles.filterContainer}>
            <FilterPanel />
          </aside>
          <ProductsList />
        </div>
      </main>
    </QueryClientProvider>
  )
}
