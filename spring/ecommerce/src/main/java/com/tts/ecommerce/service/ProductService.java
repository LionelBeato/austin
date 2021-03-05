package com.tts.ecommerce.service;

import com.tts.ecommerce.model.Product;
import com.tts.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public List<String> findDistinctCategories(){
        return new ArrayList<>(productRepository.findDistinctCategories());
    }


    public List<String> findDistinctBrands() {
        return new ArrayList<>(productRepository.findDistinctBrands());
    }

    public List<Product> findByBrandAndOrCategory(String brand, String category) {
        if (category == null && brand == null) {
            return productRepository.findAll();
        } else if (category == null) {
            return productRepository.findByBrand(brand);
        } else if (brand == null) {
            return productRepository.findByCategory(category);
        } else {
            return productRepository.findByBrandAndCategory(brand, category);
        }
    }

    public Product findById(long id) {
        return productRepository.findById(id);
    }

    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }


}
