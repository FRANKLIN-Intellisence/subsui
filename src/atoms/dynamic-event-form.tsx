/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, ChangeEvent } from 'react';
import { FaHome } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';



const DynamicForm = ({ formApiUrl }: { formApiUrl: string }) => {
  const [formData, setFormData] = useState<any>(null);
  const [formValues, setFormValues] = useState<any>({});
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    // Fetch form configuration from API
    const fetchForm = async () => {
      try {
        setIsLoading(true);
        // In a real application, you would fetch from formApiUrl
        // For demo purposes, we're using a timeout to simulate API call
        setTimeout(() => {
          // This is sample data that would normally come from your API
          const sampleFormData = {
            "formId": "event-registration",
            "title": "Event Registration Form",
            "description": "Please fill out the following information to register for our event",
            "submitUrl": "/api/submit/event-registration",
            "fields": [
              {
                "id": "email",
                "type": "input",
                "inputType": "email",
                "label": "Email Address",
                "placeholder": "your@email.com",
                "required": true,
                "validation": {
                  "pattern": "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
                  "message": "Please enter a valid email address"
                }
              },
              {
                "id": "name",
                "type": "input",
                "inputType": "text",
                "label": "Full Name",
                "placeholder": "John Doe",
                "required": true
              },
              {
                "id": "dob",
                "type": "date",
                "label": "Date of Birth",
                "required": true
              },
              {
                "id": "phone",
                "type": "input",
                "inputType": "tel",
                "label": "Phone Number",
                "placeholder": "(123) 456-7890",
                "required": false
              },
              {
                "id": "languages",
                "type": "select",
                "label": "Languages Spoken",
                "multiple": true,
                "options": [
                  { "value": "en", "label": "English" },
                  { "value": "es", "label": "Spanish" },
                  { "value": "fr", "label": "French" },
                  { "value": "de", "label": "German" },
                  { "value": "zh", "label": "Chinese" }
                ],
                "required": false
              },
              {
                "id": "foodPreference",
                "type": "radio",
                "label": "Food Preference",
                "options": [
                  { "value": "vegetarian", "label": "Vegetarian" },
                  { "value": "vegan", "label": "Vegan" },
                  { "value": "non-vegetarian", "label": "Non-Vegetarian" },
                  { "value": "gluten-free", "label": "Gluten Free" }
                ],
                "required": true
              },
              {
                "id": "additionalInfo",
                "type": "textarea",
                "label": "Additional Information",
                "placeholder": "Please share any additional requirements or notes",
                "rows": 4,
                "required": false
              },
              {
                "id": "termsAccepted",
                "type": "checkbox",
                "label": "I agree to the terms and conditions",
                "required": true
              }
            ]
          };
          
          setFormData(sampleFormData);
          
          // Initialize form values with empty strings or defaults
          const initialValues: Record<string, string | boolean | string[]>  = {};
          sampleFormData.fields.forEach(field => {
            if (field.type === 'checkbox') {
              initialValues[field.id] = false;
            } else if (field.type === 'select' && field.multiple) {
              initialValues[field.id] = [];
            } else {
              initialValues[field.id] = '';
            }
          });
          
          setFormValues(initialValues);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching form data:', error);
        setIsLoading(false);
      }
    };

    fetchForm();
  }, [formApiUrl]);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>, fieldId: string | number, fieldType: string) => {
    let value;
    
    if (fieldType === 'checkbox') {
      value = (e.target as HTMLInputElement).checked;
    } else if (fieldType === 'select' && (e.target as HTMLSelectElement).multiple) {
      value = Array.from((e.target as HTMLSelectElement).selectedOptions, option => option.value);
    } else {
      value = e.target.value;
    }
    
    setFormValues({
      ...formValues,
      [fieldId]: value
    });
    
    // Clear error when field is changed
    if (errors[fieldId]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldId]: null
      }));
    }
  };

  const validateField = (field: { required: boolean; label: string; validation?: { pattern: string; message?: string } }, value: string | boolean | string[]) => {
    if (field.required && (value === '' || value === false || (Array.isArray(value) && value.length === 0))) {
      return `${field.label} is required`;
    }
    
    if (field.validation && field.validation.pattern) {
      const regex = new RegExp(field.validation.pattern);
      if (value !=  "" && !regex.test(value.toString())) {
        return field.validation.message || `Invalid ${field.label}`;
      }
    }
    
    return null;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string | null> = {};
    let hasErrors = false;
    
    formData.fields.forEach((field: any) => {
      const error = validateField(field, formValues[field.id]);
      if (error) {
        newErrors[field.id] = error;
        hasErrors = true;
      }
    });
    
    setErrors(newErrors);
    
    if (!hasErrors) {
      // In a real application, you would submit to formData.submitUrl
      console.log('Form submitted with values:', formValues);
      setIsModalOpen(true); // Show the modal
    }
  };

  const renderField = (field: any) => {
    switch (field.type) {
      case 'input':
        return (
          <input
            id={field.id}
            type={field.inputType || 'text'}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={field.placeholder || ''}
            value={formValues[field.id] || ''}
            onChange={(e) => handleChange(e, field.id, field.type)}
          />
        );
        
      case 'date':
        return (
          <input
            id={field.id}
            type="date"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formValues[field.id] || ''}
            onChange={(e) => handleChange(e, field.id, field.type)}
          />
        );
        
      case 'select':
        return (
          <select
            id={field.id}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            multiple={field.multiple}
            value={formValues[field.id] || (field.multiple ? [] : '')}
            onChange={(e) => handleChange(e, field.id, field.type)}
            size={field.multiple ? Math.min(5, field.options.length) : 1}
          >
            {!field.multiple && <option value="">-- Select --</option>}
            {field.options.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
        
      case 'radio':
        return (
          <div className="flex flex-col gap-2">
            {field.options.map((option: any) => (
              <label key={option.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={field.id}
                  value={option.value}
                  checked={formValues[field.id] === option.value}
                  onChange={(e) => handleChange(e, field.id, field.type)}
                  className="h-4 w-4 text-blue-600"
                />
                {option.label}
              </label>
            ))}
          </div>
        );
        
      case 'textarea':
        return (
          <textarea
            id={field.id}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={field.placeholder || ''}
            rows={field.rows || 3}
            value={formValues[field.id] || ''}
            onChange={(e) => handleChange(e, field.id, field.type)}
          />
        );
        
      case 'checkbox':
        return (
          <label className="flex items-center gap-2">
            <input
              id={field.id}
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={formValues[field.id] || false}
              onChange={(e) => handleChange(e, field.id, field.type)}
            />
            {field.label}
          </label>
        );
        
      default:
        return <p>Unknown field type: {field.type}</p>;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-lg">Loading form...</div>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="flex justify-center items-center p-8">

        <div className="text-lg text-red-600">Error loading form</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 rounded-lg shadow-md overflow-y-auto flex-grow">
      <h1 className="text-2xl font-bold mb-2">{formData.title}</h1>
      <p className="text-gray-600 mb-6">{formData.description}</p>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6 overflow-y-auto">
          {formData.fields.map((field: any) => (
            <div key={field.id} className="space-y-1">
              {field.type !== 'checkbox' && (
                <label htmlFor={field.id} className="block font-medium">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
              )}
              
              {renderField(field)}
              
              {errors[field.id] && (
                <p className="text-red-500 text-sm">{errors[field.id]}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
 

      {isModalOpen && (
        
        <div className="fixed inset-0 flex flex-col text-xl bg-[#000022] bg-opacity-50 items-center justify-center ">

          <div className="bg-[#101030] p-6 rounded-2xl shadow-lg w-1/3 h-1/2 flex flex-col gap-6 items-center justify-center ">
            <h2 className="text-4xl font-bold mb-4 text-[#00ffff]">Registration Successful!</h2>
            <p className="mb-4">Thank you for registering. Check out our upcoming events.</p>
            <div className="flex justify-between gap-6">
            
            <Link to="/new-events">
            <button
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setIsModalOpen(false)} 
              >
                Check Upcoming Events
              </button>
            </Link>

            <Link to ="/">
            <button
                className="flex items-center gap-2 text-white hover:text-[#00ffff] focus:outline-none"
                onClick={() => setIsModalOpen(false)}
              >
                <FaHome className='text-[#00ffff]'/>
                Back to Home
              </button>
          </Link>
        
            </div>
          </div>
    </div>
      )}
    </div>
  );
  
};

export default DynamicForm;